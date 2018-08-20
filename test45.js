;(function () {

    function isNum (field) {
        return Object.prototype.toString.call(field) === '[object Number]';
    }

    function Node (element) {
        this.element = element;
        this.next = null;
    }

    function LinkList () {
        this.size = 0;
        this.head = null;
    }

    LinkList.prototype.append = function (element) {
        var node = new Node(element);
        var current = null;

        if (this.head === null || this.size === 0) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }

        this.size += 1;
    };

    LinkList.prototype.remove = function (position) {
        if (!isNum(position)) {
            throw new Error('position must be a number');
        }

        if (position < 0 || position > this.size - 1) {
            throw new Error('position must greater-than 0 and less-then LinkList item lagest index');
        }

        var previous = null;
        var current = this.head;

        if (position === 0) {
            this.head = current.next;
        } else {
            for (var i = 0; i < position; i += 1) {
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
        }

        this.size -= 1;

        return current;
    };

    LinkList.prototype.isEmpty = function () {
        return this.size === 0;
    };

    LinkList.prototype.insert = function (position, element) {
        if (!isNum(position)) {
            throw new Error('position must be a number');
        }

        if (position < 0) {
            throw new Error('position must greater-than 0');
        }

        var previous = null;
        var current = this.head;
        var node = new Node(element);

        if (position === 0) {
            node.next = current;
            this.head = node;
        } else if (position === this.size + 1) {
            this.append(element);
        } else {
            for (var i = 0; i < position; i += 1) {
                previous = current;
                current = current.next;
            }
            previous.next = node;
            node.next = current;
        }

        this.size += 1;

        return this.size;
    };

    LinkList.prototype.indexOf = function (element) {
        var current = this.head;
        var index = -1;

        for (var i = 0; i < this.size; i += 1) {
            if (current.element === element) {
                index = i;
                break;
            } else {
                if (current.next) {
                    current = current.next;
                }
            }
        }

        return index;
    };

    var link = new LinkList();

    for (var i = 0; i < 10; i += 1) {
        link.append(i);
    }

    console.log(link.size);
    
    link.remove(5);
    console.log(link.size);

    link.insert(10, 100);
    console.log(link.size);

    console.log(link.head);

    console.log(link.indexOf(6));
    ``
})();