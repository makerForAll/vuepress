import { defineClientConfig, useRoute, useRouter } from "vuepress/client";
import { onMounted, watch } from "vue";

const HOME_REDIRECT_TO = "/siderbar/"; // 修改为你的目标页面路径【主页 指向 特定页面内容】

export default defineClientConfig({
  setup() {
    const route = useRoute();
    const router = useRouter();

    const redirectHome = () => {
      if (route.path === "/") router.replace(HOME_REDIRECT_TO);
    };

    onMounted(redirectHome);
    watch(() => route.path, redirectHome);
  },
});