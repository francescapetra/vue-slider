var app = new Vue(
  {
    el:"#root",
    data:{
      images: [
          "https://www.aprireinfranchising.it/useruploads/images/franchisinglist/sephora-franchising-list-aprire.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp7BTMStct0Bdjt2m6-w-TLjQAJdrtnILdgg&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNxTlOFNycETFtOARjFF6itBflWb2bviIOug&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa2nWeSDVwz8XqvIEVjqqECluCOmwVkcwwrQ&usqp=CAU"
      ],
      imagesIndex : 0,
    },
    methods:{
      nextImage: function(){
        this.imagesIndex++;
        //console.log(this);
        if (this.imagesIndex == this.images.length) {
          this.imagesIndex = 0;
        }
      },
      previousImage: function(){
        this.imagesIndex--;
        //console.log(this);
        if (this.imagesIndex < 0) {
          this.imagesIndex = this.images.length-1;
        }
      },
      bulletImage: function(i){
        this.imagesIndex = i;
        console.log(this);
      }
    }
  }
);
