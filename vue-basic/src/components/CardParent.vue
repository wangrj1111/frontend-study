<template>
    <div>
        <Card>
            <template #header>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus esse quod ducimus veniam ab, saepe aliquam asperiores totam corporis fugiat voluptate et iusto enim sapiente quo minima quasi distinctio quaerat.
                </p>
            </template>
            <p>
                这是中间内容
            </p>
            <template #footer>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci possimus fugiat ad corporis modi ullam minima a aliquam ducimus, est odit quod dolorum quia asperiores temporibus illum nostrum error in.
                </p>
            </template>
        </Card>
    </div>
</template>

<script setup lang="ts">
import Card from './Card.vue';
</script>

<style scoped>

</style>