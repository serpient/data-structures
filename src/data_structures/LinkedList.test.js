import LinkedList from 'data_structures/LinkedList.js';

describe('linkedList methods', () => {
  let list;
  beforeEach(() => {
    list = new LinkedList();
  })
    
  it('creates new list with correct constructor', () => {
    expect(list).toEqual({head: null});
  })

  it('assigns first item as head when using push', () => {
    list.push('one');
    expect(list.getHead()).toEqual({ prev: null, item: 'one', next: null });
  })

  it('assigns first item as head when using unshift', () => {
    list.unshift('one');
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

  it('adds new node to beginning of list when using unshift', () => {
    list.push('one');
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
})