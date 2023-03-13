<template>
  <main>
    <h2 class="title">Переменная и инструкция присваивания</h2>
    <p class="mb-4"><span class="font-semibold italic">Переменная</span> — это имя, на которое ссылается значение.</p>
    <p>Представим, что переменная — это коробочка, в которую мы можем что-то положить. То, что лежит в коробочке, будет
      называться <span class="font-semibold italic">значением переменной</span>.</p>
    <figure class="max-w-lg mx-auto my-4">
      <img class="max-w-full mx-auto h-auto rounded-lg" src="/src/assets/topics/variable.webp" alt="Переменная">
    </figure>
    <p class="mb-4">Также в ходе выполнения программы мы можем, например, это значение достать и положить другое.
      Это будет значить, что переменная изменилась.</p>
    <p class="mb-4"><span class="font-semibold italic">Инструкция присваивания</span> создает новую переменную и
      присваивает ей значение:</p>
    <pre><code>
<span class="line-number">1</span>message = <span class="string">"Дмитрий"</span>
<span class="line-number">2</span>n = <span class="number">17</span>
<span class="line-number">3</span>pi = <span class="number">3.141592653589793</span></code></pre>
    <p>В это примере три инструкции присваивания. Первая присваивает строку новой переменной с именем
      <code>message</code>; вторая задает переменной <code>n</code> целочисленное значение <code>17</code>;
      третья присваивает приближенное значение π переменной <code>pi</code>.</p>
  </main>
</template>

<script>
export default {
  name: "VariableAssignmentStatement"
}
</script>

<style scoped>

</style>