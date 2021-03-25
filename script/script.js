var app = new Vue(
  {
    el:"#root",
    data:{
      images: [
          "https://www.sephora.it/dw/image/v2/BCVW_PRD/on/demandware.static/-/Library-Sites-SephoraV2/default/dwd7c6f34c/LP/xmas-logo/sepho-logo-anim-desk_v2.gif?q=75",
          "https://www.perfumespremium.it/media/catalog/category/SHISEIDO_BANNER_MARCA_1244X400_ok.jpg",
          "https://ascotcosmetics.co.za/wp-content/uploads/2017/02/SRRR-Banner-1500x500.jpg",
          "https://cdn11.bigcommerce.com/s-c8f9a/product_images/uploaded_images/loreal-banner-1024x361.jpg"
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
