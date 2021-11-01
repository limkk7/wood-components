import classnames, {scopedClassMaker} from '../classes'
describe('className 合并函数', () => {
  it('接受一个className', () => {
    const result = classnames('a')
    expect(result).toEqual('a')
  })
  it('接受 2 个 className', () => {
    const result = classnames('a', 'b')
    expect(result).toEqual('a b')
  })
  it('接受 2 个 className', () => {
    const result = classnames('a', undefined)
    expect(result).toEqual('a')
  })
  it('接受 0 个 className', () => {
    const result = classnames()
    expect(result).toEqual('')
  })
  it('接受多个 className', () => {
    const result = classnames('xx', null, 'aa', undefined, false)
    expect(result).toEqual('xx aa')
  })
})
describe('scopedClassMaker', () => {
  it('接受字符串或对象', () => {
    const sc = scopedClassMaker('XXX');
    expect(sc('')).toEqual('XXX')
    expect(sc('x')).toEqual('XXX-x')
    expect(sc({A: true, C: true})).toEqual('XXX-A XXX-C')
    expect(sc({A: true, B: false})).toEqual('XXX-A')
    expect(sc({A: true, C: true}, {extra: 'FU'})).toEqual('XXX-A XXX-C FU')
  })
})