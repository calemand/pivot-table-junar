# pivot-table-junar
Tablas dinámicas para Junar

Para uso de dicha herramienta solo se necesita descargar el proyecto en un servidor luego mediante 
la url ingresar por parametro `guid` del dashboard que necesites conectar.

Ejemplo:

Para conectar los datos [http://sinamecc.opendata.junar.com/dashboards/20511/inventarios-2012/](http://sinamecc.opendata.junar.com/dashboards/20511/inventarios-2012/),
En las opciones de configuración optines el GUID unico de la colección

![image](https://user-images.githubusercontent.com/8600749/50022363-84f0ef00-ffa1-11e8-8666-7e891b9dd55d.png)

Luego de obtener el GUID se agrega al final de la URL `<dominio-url-path>/pivot-table-junar/?guid=INVEN-2012`

Para integrar la heramienta de analizis solo debes de aregar el siguiente codigo con la URL y el GUID debidamente configurado.

```html 
<iframe 
 src="<dominio-url-path>/pivot-table-junar/?guid=INVEN-2012" 
 height="100%" 
 width="100%">
</iframe> 
```
Demo en el siguiente enlace [Pivot-Table-Junar](http://ec2-54-159-131-7.compute-1.amazonaws.com/pivot-table-junar/?guid=INVEN-2012)
