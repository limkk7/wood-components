import classnames from '../classnames'
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