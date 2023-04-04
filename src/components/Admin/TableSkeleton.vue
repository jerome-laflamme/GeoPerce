<script setup lang="ts"></script>

<template>
	<div class="container m-24 mx-auto rounded text-center py-16">
		<table class="w-11/12 mx-auto">
			<caption class="text-2xl font-bold text-center p-4">
				<slot name="caption"></slot>
			</caption>
			<thead>
				<tr>
					<slot name="th-thead"></slot>
				</tr>
			</thead>
			<tfoot>
				<tr>
					<slot name="td-tfoot"></slot>
				</tr>
			</tfoot>
			<tbody>
				<slot name="tr-tbody"></slot>
			</tbody>
		</table>
	</div>
</template>

<style scoped>
/* .container {
	background-color: hsla(164, 16%, 73%, 0.95);
	box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
} */

.container {
	background-color: #c2c2c2f2;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}
table,
tr,
td,
th {
	border: black 1px solid;
}
</style>
