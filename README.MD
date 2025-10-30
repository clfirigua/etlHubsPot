Documentacion oficial para HubSpot https://developers.hubspot.com

Pasos para obtener el token para funcionamiento
1. ingresar a hubspot
2. dirigirse al apartado de desarrollo
3. Seleccionar aplicaciones anteriores
4. Crear legacy app
5. Seleccionar la opcion de private
6. Seleccionar los siguientes permisos:
    crm.objects.contacts.read
    crm.objects.contacts.write
    crm.objects.deals.highly_sensitive.read
    crm.objects.deals.read
    crm.objects.deals.sensitive.read
    crm.objects.deals.write
    crm.objects.leads.read
    crm.schemas.deals.read
    crm.schemas.deals.write
7. Copiar el token de acceso
8. Guardarlo como variable de entorno TOKENHUBSPOT