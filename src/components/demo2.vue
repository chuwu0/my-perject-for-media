<template>
<div class="demo1">demo2</div>
</template>

<script>

import {
    getTest
} from '../api/request'

export default {
  created () {
        getTest( 'CCA' ).then(
            result => {
                console.log(result.data.Content)
            }
        )
  }
}
</script>

<style>

</style>
