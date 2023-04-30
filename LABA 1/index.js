//1
var products = {
    shoes: {
        boots: {
            id: 1,
            size: 42,
            color: "brown",
            cost: 150
        },
        sneakers: {
            id: 2,
            size: 45,
            color: "red",
            cost: 200
        },
        sandals: {
            id: 3,
            size: 48,
            color: "dark",
            cost: 202
        }
    }
};
//2
function makeIterator(array) {
    var nextIndex = 0;
    return {
        next: function () {
            return nextIndex < array.length ?
                { value: array[nextIndex++], done: false } :
                { done: true };
        }
    };
}
//это объект, который предоставляет метод next(), возвращающий следующий элемент последовательности. Этот метод возвращает объект с двумя свойствами: done и value. После создания, объект-итератор может быть явно использован, с помощью вызовов метода next().
//3
var costs = [products.shoes.boots.cost, products.shoes.sneakers.cost, products.shoes.sandals.cost];
var sizes = [products.shoes.boots.size, products.shoes.sneakers.size, products.shoes.sandals.size];
var colors = [products.shoes.boots.color, products.shoes.sneakers.color, products.shoes.sandals.color];
var strTemp = prompt("1-фильтр обуви по цене\n2-фильтр обуви по размеру\n3-фильтр обуви по цвету\n4-выход");
var choice = 0;
if (strTemp) {
    choice = parseInt(strTemp);
}
switch (choice) {
    case 1: {
        strTemp = prompt("Начальный диапазон");
        var choice1 = 0;
        if (strTemp) {
            choice1 = parseInt(strTemp);
        }
        var choice2 = 0;
        strTemp = prompt("Конечный диапазон");
        if (strTemp) {
            choice2 = parseInt(strTemp);
        }
        var it = makeIterator(costs);
        for (var i = 0; i < costs.length; i++) {
            var vr = it.next().value;
            if (vr) {
                if (vr >= choice1 && vr <= choice2) {
                    if (vr == products.shoes.boots.cost) {
                        alert("\u041D\u043E\u043C\u0435\u0440 \u0442\u043E\u0432\u0430\u0440\u0430:".concat(products.shoes.boots.id));
                    }
                    else if (vr == products.shoes.sneakers.cost) {
                        alert("\u041D\u043E\u043C\u0435\u0440 \u0442\u043E\u0432\u0430\u0440\u0430:".concat(products.shoes.sneakers.id));
                    }
                    else {
                        alert("\u041D\u043E\u043C\u0435\u0440 \u0442\u043E\u0432\u0430\u0440\u0430:".concat(products.shoes.sandals.id));
                    }
                }
            }
        }
        break;
    }
    case 2:
        {
            strTemp = prompt("Начальный диапазон");
            var choice1 = 0;
            if (strTemp) {
                choice1 = parseInt(strTemp);
            }
            var choice2 = 0;
            strTemp = prompt("Конечный диапазон");
            if (strTemp) {
                choice2 = parseInt(strTemp);
            }
            var it = makeIterator(sizes);
            for (var i = 0; i < sizes.length; i++) {
                var vr = it.next().value;
                if (vr >= choice1 && vr <= choice2) {
                    if (vr == products.shoes.boots.size) {
                        alert("\u041D\u043E\u043C\u0435\u0440 \u0442\u043E\u0432\u0430\u0440\u0430:".concat(products.shoes.boots.id));
                    }
                    else if (vr == products.shoes.sneakers.size) {
                        alert("\u041D\u043E\u043C\u0435\u0440 \u0442\u043E\u0432\u0430\u0440\u0430:".concat(products.shoes.sneakers.id));
                    }
                    else {
                        alert("\u041D\u043E\u043C\u0435\u0440 \u0442\u043E\u0432\u0430\u0440\u0430:".concat(products.shoes.sandals.id));
                    }
                }
            }
            break;
        }
    case 3:
        {
            var choice1 = 0;
            strTemp = prompt("Какой цвет обуви вам нужен?");
            if (strTemp) {
                choice1 = parseInt(strTemp);
            }
            var it = makeIterator(colors);
            for (var i = 0; i < colors.length; i++) {
                var vr = it.next().value;
                if (vr == choice1 && vr == products.shoes.boots.color) {
                    alert("\u041D\u043E\u043C\u0435\u0440 \u0442\u043E\u0432\u0430\u0440\u0430:".concat(products.shoes.boots.id));
                }
                else if (vr == choice1 && vr == products.shoes.sneakers.color) {
                    alert("\u041D\u043E\u043C\u0435\u0440 \u0442\u043E\u0432\u0430\u0440\u0430:".concat(products.shoes.sneakers.id));
                }
                else if (vr == choice1 && vr == products.shoes.sandals.color) {
                    alert("\u041D\u043E\u043C\u0435\u0440 \u0442\u043E\u0432\u0430\u0440\u0430:".concat(products.shoes.sandals.id));
                }
            }
            break;
        }
}
//4
var Product = /** @class */ (function () {
    function Product(id, color, size, cost, descount) {
        this.id = id;
        this.color = color;
        this.size = size;
        this.cost = cost;
        this.descount = descount;
        this.total_cost = descount;
        this._total_cost = this.total_cost;
    }
    Object.defineProperty(Product.prototype, "total_cost", {
        get: function () {
            return this._total_cost;
        },
        set: function (n) {
            this._total_cost = this.cost - this.descount;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
var prod = new Product(1, "black", 43, 100, 30);
Object.defineProperty(prod, "id", {
    writable: false,
    configurable: true
});
prod.id = 2;
//delete prod.id;
alert(prod.id);
alert(prod.total_cost);
