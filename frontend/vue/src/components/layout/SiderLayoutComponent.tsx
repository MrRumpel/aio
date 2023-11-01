import { defineComponent } from 'vue';
import { PieChartOutlined, DesktopOutlined, UserOutlined, TeamOutlined, FileOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';
import routes from '@/router';
import { useRouter, type RouteLocationRaw, type RouteRecordRaw } from 'vue-router';

export const SiderLayoutComponent = defineComponent({
  name: 'SiderLayoutComponent',
  component: [PieChartOutlined, DesktopOutlined, UserOutlined, TeamOutlined, FileOutlined],
  setup: () => {
    const collapsed = ref<boolean>(false);
    const selectedKeys = ref<string[]>(['home']);

    const router = useRouter();
    return { router, collapsed, selectedKeys };
  },
  render() {
    const { router, collapsed, selectedKeys } = this;
    return (
      <a-layout style='min-height: 100vh'>
        <a-layout-sider v-model:collapsed={this.collapsed} collapsible>
          <div class='logo' />
          <a-menu
            v-model:selectedKeys={this.selectedKeys}
            theme='dark'
            mode='inline'
            onClick={({ key }: { key: string }) => router.push({ name: key })}
          >
            {routes[1].children?.map((item, i) =>
              !item.meta?.hidden ? (
                item.children ? (
                  <a-sub-menu key={item.name}>
                    {{
                      default: () => (
                        <>
                          {item.children?.map((subMenu, i) => (
                            <a-menu-item key={subMenu.name}>{subMenu.meta?.title}</a-menu-item>
                          ))}
                        </>
                      ),
                      title: () => (
                        <>
                          <span>
                            <TeamOutlined />
                            <span>{item.meta?.title}</span>
                          </span>
                        </>
                      ),
                    }}
                  </a-sub-menu>
                ) : (
                  <a-menu-item key={item.name}>
                    <DesktopOutlined />
                    <span>{item.meta?.title}</span>
                  </a-menu-item>
                )
              ) : (
                ''
              )
            )}
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
