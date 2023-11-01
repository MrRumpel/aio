import { defineComponent } from 'vue';
import { PieChartOutlined, DesktopOutlined, UserOutlined, TeamOutlined, FileOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';

export const SiderLayoutComponent = defineComponent({
  name: 'SiderLayoutComponent',
  component: [PieChartOutlined, DesktopOutlined, UserOutlined, TeamOutlined, FileOutlined],
  setup: () => {
    const collapsed = ref<boolean>(false);
    const selectedKeys = ref<string[]>(['1']);
    return { collapsed, selectedKeys };
  },
  render() {
    const { collapsed, selectedKeys } = this;
    return (
      <a-layout style='min-height: 100vh'>
        <a-layout-sider v-model:collapsed={this.collapsed} collapsible>
          <div class='logo' />
          <a-menu v-model:selectedKeys={this.selectedKeys} theme='dark' mode='inline'>
            <a-menu-item key='1'>
              <PieChartOutlined />
              <span>Option 1</span>
            </a-menu-item>
            <a-menu-item key='2'>
              <DesktopOutlined />
              <span>Option 2</span>
            </a-menu-item>
            <a-sub-menu key='sub1'>
              {{
                default: () => (
                  <>
                    <a-menu-item key='3'>Tom</a-menu-item>
                    <a-menu-item key='4'>Bill</a-menu-item>
                    <a-menu-item key='5'>Alex</a-menu-item>
                  </>
                ),
                title: () => {
                  return (
                    <span>
                      <UserOutlined />
                      <span>User</span>
                    </span>
                  );
                },
              }}
            </a-sub-menu>
            <a-sub-menu key='sub2'>
              {{
                default: () => (
                  <>
                    <a-menu-item key='6'>Team 1</a-menu-item>
                    <a-menu-item key='8'>Team 2</a-menu-item>
                  </>
                ),
                title: () => (
                  <>
                    <span>
                      <TeamOutlined />
                      <span>Team</span>
                    </span>
                  </>
                ),
              }}
            </a-sub-menu>
            <a-menu-item key='9'>
              <FileOutlined />
              <span>File</span>
            </a-menu-item>
          </a-menu>
        </a-layout-sider>
        <a-layout>
          <a-layout-header style='background: #fff; padding: 0' />
          <a-layout-content style='margin: 0 16px'>
            <a-breadcrumb style='margin: 16px 0'>
              <a-breadcrumb-item>User</a-breadcrumb-item>
              <a-breadcrumb-item>Bill</a-breadcrumb-item>
            </a-breadcrumb>
            <div style={{ padding: '24px', background: '#fff', minHeight: '360px' }}>
              <router-view />
            </div>
          </a-layout-content>
          <a-layout-footer style='text-align: center'>All In One ©2023 Created by Rumpel</a-layout-footer>
        </a-layout>
      </a-layout>
    );
  },
});
