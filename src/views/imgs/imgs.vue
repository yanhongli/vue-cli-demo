<template>
  <div class="d-flex flex-wrap justify-content-around">
    <div class="card" style="width: 18rem;margin-bottom: 15px;" v-for="(value, index) in list" :key="index">
      <img v-lazy="value.src" class="card-img-top resposive-img" alt="..." />
      <div class="card-body">
        <p
          class="card-text"
        >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          title: "",
          src:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589130717016&di=3f7c048c405fe90ce03b0d8c5fc6053c&imgtype=0&src=http%3A%2F%2Fi2.download.fd.pchome.net%2Ft_600x1024%2Fg1%2FM00%2F0A%2F11%2FooYBAFPoVcqINcNvAAgf4EQc4nwAAB1WAHEI8EACB_4361.jpg"
        },
        {
          title: "",
          src:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589130717016&di=4497ee6a08a831109d25cca30635b127&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F17%2F20180917123047_ynwEk.jpeg"
        },
        {
          title: "",
          src:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589130717015&di=03db5b16452c392d98e78f887557fda1&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F81c64e786375963ff75deee4cce7c646d21065fb898c-oTRWCj_fw658"
        },
        {
          title: "",
          src:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589130717015&di=c466de228f1b1ea07c033f547e317519&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201505%2F31%2F20150531114552_KMsTj.jpeg"
        },
        {
          title: "",
          src:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589130717015&di=1aadd9decf8688de0ff86072c0142352&imgtype=0&src=http%3A%2F%2Fandroid-screenimgs.25pp.com%2F20121217%2F1848%2F030325f37926d568.jpg"
        },
        {
          title: "",
          src:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589130717012&di=bd9f0f6a73f79dc9bcdf8db733473cf4&imgtype=0&src=http%3A%2F%2Ft-1.tuzhan.com%2Fb62912066c50%2Fc-1%2Fl%2F2012%2F12%2F10%2F11%2Fb96ca86e09df4ddb85bd46bf958a4ed9.jpg"
        },
        {
          title: "",
          src:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589130717012&di=7d94d73fc8b20ffcf7ffb0d740d1472e&imgtype=0&src=http%3A%2F%2Fwww.eeyd.com%2Fdata%2Fattachment%2Fforum%2F201912%2F12%2F194618ubc75s5sanle33ye.jpg"
        },
        {
          title: "",
          src:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589130717011&di=b19fcfd999ec1c581ad0b6adaf22bb30&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201602%2F04%2F20160204183807_facwd.jpeg"
        },
        {
          title: "",
          src:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3914110787,1366433679&fm=26&gp=0.jpg"
        },
        {
          title: "",
          src:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589130717011&di=8650e42b83e326ed2f1249acfba9dbaa&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201602%2F04%2F20160204184056_kz8fA.thumb.700_0.jpeg"
        },
        {
          title: "",
          src:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589130717010&di=ba2cba63574777c9d54be09cb5b2583a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201602%2F15%2F20160215165325_ZWu5U.thumb.700_0.jpeg"
        },
        {
          title: "",
          src:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589130717010&di=33b76e5bfdb26b467f07305d7477b618&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180801%2F22%2F1533134507-lscDkSKHwY.jpeg"
        }
      ]
    };
  }
};
</script>