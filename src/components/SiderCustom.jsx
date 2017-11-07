import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router';
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SiderCustom extends Component {
  state = {
    collapsed: false,
    mode: 'inline',
    openKey: '',
    selectedKey: '',
    firstHide: true, // 点击收缩菜单，第一次隐藏展开子菜单，openMenu时恢复
  };
  componentDidMount() {
    this.setMenuOpen(this.props);
  }
  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
    this.onCollapse(nextProps.collapsed);
    this.setMenuOpen(nextProps)
  }
  setMenuOpen = props => {
    const {path} = props;
    this.setState({
      openKey: path.substr(0, path.lastIndexOf('/')),
      selectedKey: path
    });
  };
  onCollapse = (collapsed) => {
    // console.log(collapsed);
    this.setState({
      collapsed,
      firstHide: collapsed,
      mode: collapsed
        ? 'vertical'
        : 'inline'
    });
  };
  menuClick = e => {
    this.setState({selectedKey: e.key});
    // console.log(e);
    const {popoverHide} = this.props; // 响应式布局控制小屏幕点击菜单时隐藏菜单操作
    popoverHide && popoverHide();
    let crumbState = {
      first: e.item.props.first,
      second: e.item.props.second
    }
    this
      .props
      .getPath(crumbState);
  };
  openMenu = v => {
    // console.log(v);
    this.setState({
      openKey: v[v.length - 1],
      firstHide: false
    })
  };
    render() {
        return (
            <Sider trigger={null}  breakpoint="lg" collapsed={this.props.collapsed} style={{overflowY: 'auto'}}>
                <div className="logo"><p style={{ lineHeight:'30px',textAlign:'center',color:'#fff',margin:'0',fontSize:'18px' }}>分布式爬虫平台</p></div>
                <Menu onClick={this.menuClick} theme="dark" mode="inline" defaultOpenKeys={['/app/worker']} selectedKeys={[this.state.selectedKey]}  openKeys={this.state.firstHide ? null : [this.state.openKey]} onOpenChange={this.openMenu}>
                    <Menu.Item key="/app/dashboard/index">
                        <Link to={'/app/dashboard/index'}><Icon type="home" /><span className="nav-text">首页</span></Link>
                    </Menu.Item>
                    <SubMenu key="/app/worker" title={<span><Icon type="bars" /><span className="nav-text">Worker管理</span></span>}>
                        <Menu.Item key="/app/worker/worker" first="worker管理" second="worker管理"><Link to={'/app/worker/worker'}><Icon type="setting" /><span className="nav-text">worker管理</span></Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="/app/crawler" title={<span><Icon type="bars" /><span className="nav-text">爬虫管理</span></span>}>
                        <Menu.Item key="/app/crawler/crawlerList" first="爬虫管理" second="爬虫列表"><Link to={'/app/crawler/crawlerList'}><Icon type="safety" /><span className="nav-text">爬虫列表</span></Link></Menu.Item>
                        <Menu.Item key="/app/crawler/addCrawler" first="爬虫管理" second="添加爬虫"><Link to={'/app/crawler/addCrawler'}><Icon type="safety" /><span className="nav-text">添加爬虫</span></Link></Menu.Item>
                        <Menu.Item key="/app/crawler/crawlerTaskList" first="爬虫管理" second="任务列表"><Link to={'/app/crawler/crawlerTaskList'}><Icon type="safety" /><span className="nav-text">任务列表</span></Link></Menu.Item>
                        <Menu.Item key="/app/crawler/crawlerInstance" first="爬虫管理" second="运行实例"><Link to={'/app/crawler/crawlerInstance'}><Icon type="safety" /><span className="nav-text">运行实例</span></Link></Menu.Item>
                        <Menu.Item key="/app/crawler/crawlerDetail" first="爬虫管理" second="查看爬虫"><Link to={'/app/crawler/crawlerDetail'}><Icon type="safety" /><span className="nav-text">查看爬虫</span></Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="/app/interface" title={<span><Icon type="bars" /><span className="nav-text">接口管理</span></span>}>
                        <Menu.Item key="/app/interface/interfaceList" first="接口管理" second="接口列表"><Link to={'/app/interface/interfaceList'}><Icon type="safety" /><span className="nav-text">接口列表</span></Link></Menu.Item>
                        <Menu.Item key="/app/interface/interfaceCallList" first="接口管理" second="接口调用列表"><Link to={'/app/interface/interfaceCallList'}><Icon type="safety" /><span className="nav-text">接口调用列表</span></Link></Menu.Item>
                    </SubMenu>
                    {/* <SubMenu  key="/app/ui" title={<span><Icon type="scan" /><span className="nav-text">UI</span></span>}>
                        <Menu.Item key="/app/ui/buttons" first="ui" second="button"><Link to={'/app/ui/buttons'}>按钮</Link></Menu.Item>
                        <Menu.Item key="/app/ui/icons"><Link to={'/app/ui/icons'}>图标</Link></Menu.Item>
                        <Menu.Item key="/app/ui/spins"><Link to={'/app/ui/spins'}>加载中</Link></Menu.Item>
                        <Menu.Item key="/app/ui/modals"><Link to={'/app/ui/modals'}>对话框</Link></Menu.Item>
                        <Menu.Item key="/app/ui/notifications"><Link to={'/app/ui/notifications'}>通知提醒框</Link></Menu.Item>
                        <Menu.Item key="/app/ui/tabs"><Link to={{pathname:'/app/ui/tabs',hash: '#tabs',state:{first: 'ui',second: 'tabs'}}}>标签页</Link></Menu.Item>
                        <Menu.Item key="/app/ui/banners"><Link to={'/app/ui/banners'}>轮播图</Link></Menu.Item>
                        <Menu.Item key="/app/ui/wysiwyg"><Link to={'/app/ui/wysiwyg'}>富文本</Link></Menu.Item>
                        <Menu.Item key="/app/ui/drags"><Link to={'/app/ui/drags'}>拖拽</Link></Menu.Item>
                        <Menu.Item key="/app/ui/gallery"><Link to={'/app/ui/gallery'}>画廊</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="/app/animation" title={<span><Icon type="rocket" /><span className="nav-text">动画</span></span>}>
                        <Menu.Item key="/app/animation/basicAnimations"><Link to={'/app/animation/basicAnimations'}>基础动画</Link></Menu.Item>
                        <Menu.Item key="/app/animation/exampleAnimations"><Link to={'/app/animation/exampleAnimations'}>动画案例</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="/app/table" title={<span><Icon type="copy" /><span className="nav-text">表格</span></span>}>
                        <Menu.Item key="/app/table/basicTable"><Link to={'/app/table/basicTable'}>基础表格</Link></Menu.Item>
                        <Menu.Item key="/app/table/advancedTable"><Link to={'/app/table/advancedTable'}>高级表格</Link></Menu.Item>
                        <Menu.Item key="/app/table/asynchronousTable"><Link to={'/app/table/asynchronousTable'}>异步表格</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu  key="/app/form" title={<span><Icon type="edit" /><span className="nav-text">表单</span></span>}>
                        <Menu.Item key="/app/basicForm"><Link to={'/app/form/basicForm'}>基础表单</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="/app/chart" title={<span><Icon type="area-chart" /><span className="nav-text">图表</span></span>}>
                        <Menu.Item key="/app/chart/echarts"><Link to={'/app/chart/echarts'}>echarts</Link></Menu.Item>
                        <Menu.Item key="/app/chart/recharts"><Link to={'/app/chart/recharts'}>recharts</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="switcher" /><span className="nav-text">页面</span></span>}>
                        <Menu.Item key="/login"><Link to={'/login'}>登录</Link></Menu.Item>
                        <Menu.Item key="/404"><Link to={'/404'}>404</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="/app/auth" title={<span><Icon type="safety" /><span className="nav-text">权限管理</span></span>}>
                        <Menu.Item key="/app/auth/basic"><Link to={'/app/auth/basic'}>基础演示</Link></Menu.Item>
                        <Menu.Item key="/app/auth/routerEnter"><Link to={'/app/auth/routerEnter'}>路由拦截</Link></Menu.Item>
                    </SubMenu> */}
                </Menu>
                <style>
                    {`
                    #nprogress .spinner{
                        left: ${this.state.collapsed ? '70px' : '206px'};
                        right: 0 !important;
                    }
                    `}
                </style>
            </Sider>
        )
    }
}

export default SiderCustom;