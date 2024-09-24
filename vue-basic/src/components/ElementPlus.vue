<template>
  <el-container>
    <!-- 顶部导航栏 -->
    <el-header height="60px" style="background-color: #333;">
      <el-menu mode="horizontal" text-color="#fff" background-color="#333" active-text-color="#ffd04b">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">关于我们</el-menu-item>
        <el-menu-item index="3">服务</el-menu-item>
        <el-menu-item index="4">联系</el-menu-item>
      </el-menu>
    </el-header>

<!-- 内容区，包含轮播图 -->
<el-main>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="(ad, index) in ads" :key="index">
        <el-image :src="ad.src" alt="广告图片" fit="cover" style="width: 100%; height: 200px;" />
      </el-carousel-item>
    </el-carousel>

      <!-- 特色服务区 -->
      <section class="services">
        <h2>我们的服务</h2>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-card>
              <h3>云计算解决方案</h3>
              <p>我们为企业提供全面的云计算架构和管理服务，确保企业在数字化转型中获得更高的效率与灵活性。</p>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card>
              <h3>数据分析与AI服务</h3>
              <p>我们的数据分析和人工智能解决方案帮助企业优化运营，发掘数据价值，实现智能化转型。</p>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card>
              <h3>网络安全咨询</h3>
              <p>我们提供定制化的网络安全解决方案，保护您的企业免受日益复杂的安全威胁，确保数据和业务的安全。</p>
            </el-card>
          </el-col>
        </el-row>
      </section>

      <!-- 产品推荐区 -->
      <section class="products">
        <h2>推荐产品</h2>
        <el-row :gutter="20">
          <el-col :span="6" v-for="(product, index) in products" :key="index">
            <el-card>
              <img :src="product.src" alt="产品图片" style="width: 100%; height: 150px; object-fit: cover;" />
              <div class="text">
                <h3>{{ product.name }}</h3>
                <p>{{ product.description }}</p>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </section>

      <!-- 用户反馈区 -->
      <section class="feedback">
        <h2>用户反馈</h2>
        <el-row :gutter="20">
          <el-col :span="8" v-for="(feedback, index) in feedbacks" :key="index">
            <el-card>
              <p>{{ feedback.comment }}</p>
              <p><strong>- {{ feedback.user }}</strong></p>
            </el-card>
          </el-col>
        </el-row>
      </section>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const ads = ref([
    { src: 'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg' },
    { src: 'https://images.pexels.com/photos/7366/startup-photos.jpg' },
    { src: 'https://images.pexels.com/photos/1921336/pexels-photo-1921336.jpeg' },
    { src: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334' },
  ]);

const products = ref([
  { name: '云服务器', description: '高性能云服务器，适用于多种业务场景。', src: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGNsb3VkJTIwc2VydmVyfGVufDB8fHx8MTY5MzY4NTMyMg&ixlib=rb-1.2.1&q=80&w=1080' },
  { name: '企业数据分析平台', description: '实时数据分析，支持大数据处理与可视化。', src: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGNsb3VkJTIwc2VydmVyfGVufDB8fHx8MTY5MzY4NTMyMg&ixlib=rb-1.2.1&q=80&w=1080' },
  { name: '网络防火墙', description: '强大的网络安全防护，保护企业数据安全。', src: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGNsb3VkJTIwc2VydmVyfGVufDB8fHx8MTY5MzY4NTMyMg&ixlib=rb-1.2.1&q=80&w=1080' },
  { name: 'AI自动化工具', description: '智能化业务处理工具，提高生产效率。', src: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGNsb3VkJTIwc2VydmVyfGVufDB8fHx8MTY5MzY4NTMyMg&ixlib=rb-1.2.1&q=80&w=1080' },
]);

const feedbacks = ref([
  { comment: '使用了他们的云计算服务后，我们的运营效率显著提升。', user: '李经理 - 某科技公司' },
  { comment: '他们的数据分析平台帮助我们发现了很多业务优化的机会。', user: '张总 - 某金融公司' },
  { comment: '网络安全服务非常专业，解决了我们长期面临的安全隐患。', user: '王工 - 某制造企业' },
]);
</script>

<style scoped>
.el-carousel__item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.el-menu {
  width: 100%;
}

.services,
.products,
.feedback {
  margin-top: 40px;
}

.services h2,
.products h2,
.feedback h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.text {
  margin-top: 10px;
}

.el-card {
  text-align: center;
}
</style>
