from django.shortcuts import render 
from django.http import HttpResponse
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from plots.models import Plot,Ryot
from plots.serializers import PlotSerializer,RyotSerializer
# from ryots.serializers import RyotSerializer

 
 
@csrf_exempt
def master(request):
    if request.method == 'GET':
        plots = Plot.objects.all()
        plots_serializer = PlotSerializer(plots, many=True)
        return JsonResponse(plots_serializer.data, safe=False)
        # In order to serialize objects, we must set 'safe=False'
        # ryots = Ryot.objects.all()
        # ryots_serializer = RyotSerializer(ryots, many=True)
        # return JsonResponse(ryots_serializer.data, safe=False)
    
    elif request.method == 'POST':
        plot_data = JSONParser().parse(request)
        plot_serializer = PlotSerializer(data=plot_data)
        if plot_serializer.is_valid():
            plot_serializer.save()
            return JsonResponse(plot_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(plot_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        # ryot_data = JSONParser().parse(request)
        # ryot_serializer = RyotSerializer(data=ryot_data)
        # if ryot_serializer.is_valid():
        #     ryot_serializer.save()
        #     return JsonResponse(ryot_serializer.data, status=status.HTTP_201_CREATED) 
        # return JsonResponse(ryot_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        Plot.objects.all().delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)
     
        # Ryot.objects.all().delete()
        # return HttpResponse(status=status.HTTP_204_NO_CONTENT)
        
 
 
@csrf_exempt 
def master_detail(request, pk):
    try: 
        plot = Plot.objects.get(pk=pk) 
    except Plot.DoesNotExist: 
        return HttpResponse(status=status.HTTP_404_NOT_FOUND) 
    # try: 
    #     ryot = Ryot.objects.get(pk=pk) 
    # except Ryot.DoesNotExist: 
    #     return HttpResponse(status=status.HTTP_404_NOT_FOUND)
 
    if request.method == 'GET': 
        plot_serializer = PlotSerializer(plot) 
        return JsonResponse(plot_serializer.data) 

        # ryot_serializer = RyotSerializer(ryot) 
        # return JsonResponse(ryot_serializer.data)

    elif request.method == 'PUT': 
        plot_data = JSONParser().parse(request) 
        plot_serializer = PlotSerializer(plot, data=plot_data) 
        if plot_serializer.is_valid(): 
            plot_serializer.save() 
            return JsonResponse(plot_serializer.data) 
        return JsonResponse(plot_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

        # ryot_data = JSONParser().parse(request) 
        # ryot_serializer = RyotSerializer(ryot, data=ryot_data) 
        # if ryot_serializer.is_valid(): 
        #     ryot_serializer.save() 
        #     return JsonResponse(ryot_serializer.data) 
        # return JsonResponse(ryot_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

    elif request.method == 'DELETE': 
        plot.delete() 
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)

        # ryot.delete() 
        # return HttpResponse(status=status.HTTP_204_NO_CONTENT)

        
     
 
         

        

        

        
   
 
    