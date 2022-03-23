function exercise21() {
  console.log("  !21-pirat-box!");

  var box = {
    locked: true,
    unlock: function () {
      this.locked = false;
    },
    lock: function () {
      this.locked = true;
    },
    _content: [],
    get content() {
      if (this.locked) throw new Error("Заперто!");
      return this._content;
    },
  };

  function withBoxUnlocked(body) {
    if ((box.locked = true)) {
      box.locked = false;
      body();
      box.locked = true;
    } else {
      body;
    }
  }

  withBoxUnlocked(function () {
    box.content.push("золотишко");
    console.log(box._content);
  });

  try {
    withBoxUnlocked(function () {
      throw new Error("Пираты на горизонте! Отмена!");
    });
  } catch (e) {
    console.log("Произошла ошибка:", e);
  }
  console.log(box.locked);
  // → true
}
