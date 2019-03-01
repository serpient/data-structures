import LinkedList from 'data_structures/LinkedList.js';

it('creates new list with correct constructor', () => {
  const list = new LinkedList();
  expect(list).toEqual({head: null});
})

describe('linkedList PUSH method', () => {
  let list;
  beforeEach(() => {
    list = new LinkedList();
  })

  it('assigns first item as head when using push', () => {
    list.push('one');
    expect(list.getHead()).toEqual({ prev: null, item: 'one', next: null });
  })

  it('adds new node to end of list when using push', () => {
    list.push('one');
    list.push('two');
    const secondItem = list.getHead().next;
    expect(secondItem).toEqual({
      prev: list.getHead(),
      item: 'two',
      next: null,
    });
  })
})

describe('linkedList SHIFT method', () => {
  let list;
  beforeEach(() => {
    list = new LinkedList();
  })

  it('removes first element from list -- list is empty', () => {
    list.shift();
    expect(list).toEqual({ head: null });
  })

  it('removes first element from list -- list has 1 node', () => {
    list.push('one');
    list.shift();
    expect(list).toEqual({
      head: null
    });
  })

  it('removes first element from list -- list has 2 nodes', () => {
    list.push('one');
    list.push('two');
    list.shift();
    expect(list.getHead()).toEqual({
      prev: null,
      item: 'two',
      next: null,
    });
  })
})

describe('linkedList GETLASTNODE method', () => {
  let list;
  beforeEach(() => {
    list = new LinkedList();
  })

  it('retrieves last element from list -- list is empty', () => {
    const lastNode = list.getLastNode();
    expect(lastNode).toEqual(null);
  })

  it('retrieves last element from list -- list has 1 node', () => {
    list.push('one');
    const lastNode = list.getLastNode();
    expect(lastNode).toEqual({
      prev: null,
      item: 'one',
      next: null,
    });
  })

  it('retrieves last element from list -- list has 2 nodes', () => {
    list.push('one');
    list.push('two');
    const lastNode = list.getLastNode();
    expect(lastNode).toEqual({
      prev: list.getHead(),
      item: 'two',
      next: null,
    });
  })
});


describe('linkedList POP method', () => {
  let list;
  beforeEach(() => {
    list = new LinkedList();
  })

  it('removes last element from list -- list is empty', () => {
    list.pop();
    expect(list).toEqual({head: null});
  })

  it('removes last element from list -- list has 1 node', () => {
    list.push('one');
    list.pop();
    expect(list).toEqual({head: null});
  })

  it('removes last element from list -- list has 2 nodes', () => {
    list.push('one');
    list.push('two');
    list.pop();
    expect(list.head).toEqual({
      prev: null,
      item: 'one',
      next: null,
    });
  })
});


describe('linkedList UNSHIFT method', () => {
  let list;
  beforeEach(() => {
    list = new LinkedList();
  })

  it('assigns first item as head when using unshift', () => {
    list.unshift('one');
    expect(list.getHead()).toEqual({ prev: null, item: 'one', next: null });
  })

  it('adds new node to beginning of list when using unshift', () => {
    list.unshift('one');
    list.unshift('two');
    const head = list.getHead();
    expect(head).toEqual({
      prev: null,
      item: 'two',
      next: {
        prev: list.getHead(),
        item: 'one',
        next: null,
      }
    })
  })
})

describe('linkedList SORT method', () => {
  let list;
  beforeEach(() => {
    list = new LinkedList();
  })

  it('sorts a list in ascending order - LETTER', () => {
    list.push('d');
    list.push('c');
    list.push('b');
    list.push('a');
    list.sort();
    expect(list.getHead().item).toEqual('a');
    expect(list.getTail().item).toEqual('d');
  })

  it('sorts a list in ascending order - NUMBER', () => {
    list.push(10);
    list.push(6);
    list.push(8);
    list.push(0);
    list.sort();
    expect(list.getHead().item).toEqual(0);
    expect(list.getTail().item).toEqual(10);
  })

  it('sorts a list in ascending order - STRINGS', () => {
    list.push('andy');
    list.push('andree');
    list.push('abbie');
    list.push('aaron');
    list.sort();
    expect(list.getHead().item).toEqual('aaron');
    expect(list.getTail().item).toEqual('andy');
  })
});