const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );

function main()
{
    console.log("main function");
    console.log("ajax request to the resource which will require cors enabled");
    $.ajax
    ({
        dataType: "html",
        url: "https://discovery-cosmos.azurewebsites.net/stac/search?limit=1&datetime=2020-08-01T00:00:54.330495Z/..&bbox0=-110.04&bbox1=35.03&bbox2=-85.96&bbox3=45.95&collection_id=sentinel-s2-l2a-cogs&searchKey=eo:cloud_cover&searchValIntLt=10&searchValIntGt=5",
        success: function(data)
        {
            console.log("log response on success");
            console.log(data);
        }
    });
}

main()
