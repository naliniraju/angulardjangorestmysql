from rest_framework import serializers
from plots.models import Plot,Ryot
# from plots.models import Ryot


class PlotSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plot
        fields = ('id', 'season', 'csi', 'section', 'offerno', 'offerdate',
                  'planteddate', 'plottype', 'plotno', 'ryot', 'village', 'distance',
                  'rationtype', 'agreementacre', 'agreementedtonne',
                  'measuredarea', 'guarantor1', 'guarantor2', 'guarantorname')


class RyotSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ryot
        fields = ('id', 'ryotcode', 'ryotname', 'grouprefno', 'fwgname',
                  'villagecode', 'villagename', 'mandalcode', 'mandalname',
                  'csicode', 'csiname', 'sectioncode', 'sectionname',
                  'literarystatus', 'email', 'address1', 'address2', 'city',
                  'paymode', 'landno', 'mobileno', 'bankcode', 'bankname',
                  'sbacno', 'loanacno', 'ledgerno', 'loanaccountledgerno',
                  'foliono', 'loanacfoliono')
