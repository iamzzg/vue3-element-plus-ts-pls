<script setup lang="ts">
import { Image } from '@/components/Image'
import { ParseSlots } from '@/components/ParseSlots'
import { useAppStore } from '@/stores/modules/appSetting'
import { ref } from 'vue'

defineOptions({
  name: 'Home'
})

const appStore = useAppStore()
const show = ref(true)
const date = ref(new Date())

const test = () => {
  console.log(appStore.theme)
  appStore.toggleTheme()
}

const toggleShow = () => {
  show.value = !show.value
}
</script>

<template>
  <main>
    <ParseSlots>
      <Image>
        <template #placeholder>
          <div>描述内容</div>
        </template>
      </Image>
    </ParseSlots>
    <br />

    <Avatar src="./"></Avatar>
    <el-button type="primary" @click="test">切换主题</el-button>
    <el-button type="primary">fdf</el-button>
    <div class="text-[40px]">fdsf</div>
    <el-button type="primary" @click="toggleShow">切换</el-button>

    <transition name="el-fade-in-linear">
      <div v-if="show" class="w-40 h-40 bg-blue-300 rounded-md"></div>
    </transition>
    <div class="test">hello world</div>

    <el-date-picker v-model="date" type="date" placeholder="Pick a day" />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit minus et totam doloribus
    dignissimos repudiandae quibusdam facilis facere porro alias quo quis ad, blanditiis quas. Atque
    blanditiis vero ipsum distinctio! Facilis eveniet enim in quo. Quisquam possimus quam aliquid
    dolore ipsum, cumque eius placeat nisi maiores. Pariatur, reprehenderit obcaecati! Quasi cum
    voluptates distinctio, ipsam vero doloremque expedita quo et obcaecati. Perferendis quasi dolor
    consectetur architecto voluptas modi fuga iure incidunt possimus illum. Consequuntur, quaerat
    tempora. Fugit quasi tempore ducimus consectetur explicabo eius quidem, obcaecati, inventore
    impedit, voluptatum esse eum dignissimos! Nobis culpa neque ducimus repellendus nostrum cumque
    sed fugiat. Deserunt, laudantium. Optio, quisquam quae incidunt non ducimus voluptatum molestias
    voluptatem voluptatibus tenetur blanditiis nobis. Aspernatur beatae consectetur incidunt atque
    enim? Cum earum voluptatem inventore, praesentium culpa hic iste et laborum sit tempore, at sed
    iusto quibusdam aliquid maxime, consequuntur harum minus! Ad necessitatibus corporis perferendis
    porro assumenda eveniet optio! Quia? Ex, voluptates possimus nemo animi quas quisquam quos
    commodi ea similique quibusdam expedita dolor sequi modi dicta dignissimos? Repellat ut tempora
    iusto et, voluptatum sit quam similique voluptate delectus vitae? Quidem earum iste ipsa
    accusantium dolorem quas quos labore quasi esse sed ex eaque aliquam dolores tenetur veniam, qui
    reiciendis autem vel eveniet ut architecto, quisquam natus nam corrupti. Porro. Distinctio
    perferendis, velit neque exercitationem quae, voluptate odit ex maxime nihil in, id fuga ratione
    quis illo quaerat. Quia esse eum unde! Delectus, cumque sed. Laboriosam totam similique odit ad.
    Id dolor, ad delectus ea, enim, laborum reprehenderit reiciendis error facere repellendus modi
    rem exercitationem ipsa beatae accusamus esse quidem recusandae. Sint delectus quam quibusdam,
    at nesciunt architecto explicabo officia. Vitae, omnis iusto consequuntur quas neque dolor
    molestiae labore? Nesciunt, pariatur, maiores voluptas ipsam omnis officia modi aperiam,
    molestiae amet ipsum placeat. Velit sit earum non impedit natus quasi iste!
  </main>
</template>
<style lang="scss" scoped>
.test {
  position: relative;
  height: 20px;
  color: $color-primary;
}
</style>
