 (function($){
    $.getQuery = function( query ) {
        query = query.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
        var expr = "[\\?&]"+query+"=([^&#]*)";
        var regex = new RegExp( expr );
        var results = regex.exec( window.location.href );
        if( results !== null ) {
            return results[1];
            return decodeURIComponent(results[1].replace(/\+/g, " "));
        } else { 
            return false;
        }
    };
})(jQuery);
$(document).ready(function(){
    var key =  "dbe2bf27f3f0a2d6990308a88ea3a96567850dbb";
    var fileLinksAPI = [];
    var guid = $.getQuery('guid');
    $.get( "http://sinamecc.cloudapi.junar.com/api/v2/dashboards/"+guid+".json/?auth_key="+key, function( data ) {
        var resources = data.resources;
        $.each(resources, function(i, item) {
            if(resources[i].doc_type=="datastream"){
                var url = "http://sinamecc.cloudapi.junar.com/api/v2/datastreams/"+resources[i].guid+"/data.csv/?auth_key="+key;
                fileLinksAPI.push({type: 'CSV', url:url, label:resources[i].last_revision.title })
            }
        });
    });
    var wpt = $('web-pivot-table')[0];
    wpt.$eventBus.$emit('setOptions', {
        leavePageWarning: 1,
        locale: 'es',
        localeFilePath: './lang/',
        availableLocales: 
        [
            { value: 'en', abbr: 'EN', label:'Lbl_English', attach:" ( english ) " },
            { value: 'es', abbr: 'ES', label:'Lbl_Spanish', attach:" ( español ) " } 
        ], 
        uiFlags:{
            header:1,
            source:1, 
            sheet:1,
            report:1,
            newWpt:0,
            openWpt:0,
            saveWpt:0,  
            message:1,
            fullScreen:1, 
            localeSwitch:1, 
            menuBar:1,  
            setting:1,  
            help:1, 
            about:1,  
            memoryMode:1, 
            olapMode:0, 
            loadFromCsv:1,  
            loadFromExcel:0,
            loadFromGss:0,  
            loadFromWs:0, 
            saveToLocal:1,  
            saveToServer:1, 
            sourceEditable:1, 
            sheetEditable:1,  
            reportEditable:1, 
            sourceRefine:1, 
            sourceExportToCsv:1,  
            sourcePrint:1,  
            sourceFullScreen:1, 
            sheetExpandCollapse:1,  
            sheetGridChartLayout:1, 
            heetPivotOnBar:1, 
            gridOptionsBar:1, 
            gridChangeSize:1, 
            gridChangeForm:1, 
            gridExportToExcel:1,  
            gridExportToHtml:1,
            gridExportToPdf:0,  
            gridPrint:1,
            gridFullScreen:1,
            chartOptionsBar:1,
            chartChangeSize:1,
            chartChangeType:1,  
            chartChangeLabels:1,  
            chartExportToHtml:1,  
            chartExportToPdf:0, 
            chartPrint:1, 
            chartFullScreen:1,    
            reportExportToHtml:1, 
            reportExportToPdf:0,  
            eportt:1, 
            reportFullScreen:1, 
            refineFullScreen:1, 
            calculatedField:1,
        },
        fileLinks:fileLinksAPI,
    });
});