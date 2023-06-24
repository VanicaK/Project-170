AFRAME.registerComponent("createMarkers",{
    init:function(){
        var marker=document.createElement("a-marker")
        marker.setAttribute("id",toy.id)
        marker.setAttribute("type","pattern")
        marker.setAttribute("url",toy.marker_pattern_url)
        marker.setAttribute("cursor",{
            rayOrigin:"mouse"
        })
        marker.setAttribute("markerhandler",{})
        mainScene.appendChild(marker)
        var plane=document.createElement("a-entity")
        plane.setAttribute(geometry,{
            "primitive":"plane",
            rotation:"0 90 0",
            position:"0 0 0"
        })
        var desctext=document.createElement("a-entity")
        desctext.setAttribute("text",{
            value:"crane"
        })
        plane.setAttribute("visible",false)
        desctext.setAttribute("visible",false)

        var model =document.createElement("a-entity")
        model.setAttribute("id",`model-${toy.id}`)
        model.setAttribute("position",toy.model_geometry.position)
        model.setAttribute("rotation",toy.model_geometry.rotation)
        model.setAttribute("scale",toy.model_geometry.scale)
        model.setAttribute("gltf-model","url(https://github.com/VanicaK/project-170-files/tree/main/crane)")
        
        this.el.addEventListener("markerFound",()=>{
            plane.setAttribute(visible,true),

        })
    }
})