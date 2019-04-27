<template>
  <router-view/>
</template>

<script>
export default {
	name: 'app',
}
</script>

<style>
:root {
	--black: #323232;
	--active-tab: rgba(0, 0, 0, 0.87);
	--disable: #0000008a;
	--f-one-white: #F1F1F1;
	--very-light: rgba(216, 216, 216, 0.5);
}

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
li,
p,
pre,
blockquote,
figure,
hr {
  margin: 0;
  padding: 0;
}

body {
	font-size: 16px;
}

noscript {
  display: block;
  margin-bottom: 1em;
  margin-top: 1em;
}

h1,
h2,
.date-srt {
	font-family: 'Inter', 'Sans-serif';
}

h1 {
	margin-top: 19px;
	margin-bottom: 20px;
	font-size: 36px;
	font-weight: bold;
}

h1, .user-id, .total-coin {
	margin-left: 26px;
	color: var(--black)
}
</style>

