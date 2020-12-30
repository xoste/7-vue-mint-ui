<template>
	<div>
		<mt-header title="多个按钮">
			<router-link to="/" slot="left">
				<mt-button icon="back">返回</mt-button>
				<mt-button @click="handleClose">  关闭</mt-button>
			</router-link>
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		
		<mt-switch v-model="value"></mt-switch>
		
		<mt-swipe :auto="4000">
			<mt-swipe-item>1</mt-swipe-item>
			<mt-swipe-item>2</mt-swipe-item>
			<mt-swipe-item>3</mt-swipe-item>
		</mt-swipe>
		
		<button @click="handle1">操作成功</button>
	</div>
</template>

<script>
	// 在JS部分所有变量都是模块作用域
    import { Toast } from 'mint-ui';
    import { MessageBox } from 'mint-ui';
    export default {
        data() {
            return {
                text:123,
                value:false
            }
        },
        methods: {
            handleClose() {
                Toast("确定关闭");
            },
	        handle1() {
                MessageBox('提示', '操作成功');
                MessageBox({
                    title: '提示',
                    message: '确定执行此操作?',
                    showCancelButton: true
                });
	        }
        }
    }
</script>
