AFRAME.registerComponent("cursor-listener",{
    schema:{
        selectedItemId:{default:"",type:"string"},
    },
    init:function(){
        this.handleMouseEnterEvents()
        this.handleMouseLeaveEvents()
    },
    handleMouseEnterEvents:function(){
        this.el.addEventListener("mouseenter",()=>{
            const id = this.el.getAttribute("id");
            const postersId=[
                "supermancomic",
                "spidermancomic",
                "avengerscomic",
                "justiceleaguecomic"
            ]
            if(postersId.includes(id)){
                const postersContainer = document.querySelector("#posters-container")
                postersContainer.setAttribute("cursor-listener",{
                    selectedItemId:id,
                })
                this.el.setAttribute("material",{color:"#1565c0"})
            }
        })
    },

    handleMouseLeaveEvents:function(){
        this.el.addEventListener("mouseleave",()=>{
            const id = this.el.getAttribute("id");
            const postersId=[
                "supermancomic",
                "spidermancomic",
                "avengerscomic",
                "justiceleaguecomic"
            ]
            if(postersId.includes(id)){
                const postersContainer = document.querySelector("#posters-container")
                postersContainer.setAttribute("cursor-listener",{
                    selectedItemId:id,
                })
                this.el.setAttribute("material",{color:"black"})
            }
        })
    },
})