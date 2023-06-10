<template>
	<footer class="px-4 dark:bg-gray-800 dark:text-gray-100">
		<p class="py-6 text-sm text-center dark:text-gray-400">Copyright © {{ date }} - César Álvarez Llaneza</p>
	</footer>
</template>

<script>
export default {
    computed: {
        date() {
            return new Date().getFullYear()
        }
    }
}
</script>