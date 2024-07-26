// 常用
{
    const aLink = document.querySelector('.link') as HTMLAnchorElement
}

// 不常用
{
    const aLink = <HTMLAnchorElement>document.querySelector('.link')
}
