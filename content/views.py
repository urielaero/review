# Create your views here.
from django .http import HttpResponse
#
from django.template import RequestContext
from django.shortcuts import render_to_response

def index(request):
    #return HttpResponse("Primera vista")
    """unaVar = "algo";
    t = loader.get_template('content/index.html')
    c = Context({
        'latest_poll_list':unaVar,
    })
    return HttpResponse(t.render(c))"""
    unaVar = {'a':1,'b':2}
    b = "hola munod en la plantilla index"
    return render_to_response('index.html',{'unaVariable':unaVar,'title':b},context_instance=RequestContext(request))
    #sin el context se muere lo que tenga la carpeta en static
    #return render_to_response('index.html',{'r':a,'title':b})

def params(request,algun_id):
    return HttpResponse("Algun id: %s" % algun_id)
