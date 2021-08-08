class Super {

}

class SubClass extends Super {
    constructor(public readonly myName = 'son') {
        super();
    }
}

export {Super, SubClass};