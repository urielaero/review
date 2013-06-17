# Create your views here.
from django .http import HttpResponse

def index(request):
    return HttpResponse("Primera vista")

def params(request,algun_id):
    return HttpResponse("Algun id: %s" % algun_id)
