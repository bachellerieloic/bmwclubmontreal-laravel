<template>
    <div>

        <login></login>

    </div>
</template>

<script>
    import Login from '../auth/login';
    import Register from '../auth/register';


    export default {
        components : { Login, Register },
    }
</script>
