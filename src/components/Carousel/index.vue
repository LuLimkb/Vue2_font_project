<!-- 封装轮播图为全局组件 -->
<template>
    <div class="swiper-container" ref="car">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(carousel, index) in list" :key="carousel.id">
                <img :src="carousel.imgUrl">
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<script>
import Swiper from 'swiper'
export default {
    name: 'Carousel',
    props: ['list'],
    watch: {
        list: {
            // 此处watch是监听不到list变化的，因为list是父组件以对象的形式传过来的，数据从来没有发生改变，所以我们要使用 immediate来进行立即监听，就是无论数据有没有变化都立即监听一次，执行回调
            immediate: true,
            handler() {
                this.$nextTick(() => {
                    var mySwiper = new Swiper(
                        this.$refs.car,
                        {
                            loop: true, // 循环模式选项

                            // 如果需要分页器
                            pagination: {
                                el: '.swiper-pagination',
                                // 点击小球的时候也切换图片
                                clickable: true
                            },

                            // 如果需要前进后退按钮
                            navigation: {
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            },

                        })
                })
            }
        }
    }
}
</script>

<style></style>