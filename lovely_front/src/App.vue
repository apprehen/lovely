<template>
	<TopBar> </TopBar>
	<router-view></router-view>
</template>

<script setup>
import TopBar from './components/common/TopBar.vue'
import { reactive, ref } from 'vue'

</script>
<style scoped lang='less'>
.test {
	color: red;

	.innerTest {
		color: blue;
	}
}
</style>

