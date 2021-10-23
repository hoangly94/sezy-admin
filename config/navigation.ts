export default [
    {
        label: 'Kho Gấu',
        $icon: {
            name: 'documentCheck',
        },
        subs: [
            {
                label: 'Tất cả',
                href: '/inventory',
                accessedRoles: ['1A'],
            },
            {
                label: 'Thêm mới',
                href: '/inventory/add',
                accessedRoles: ['1B'],
            },
        ]
    },
    {
        label: 'Quản lý PYC Điều Quỹ',
        $icon: {
            name: 'documentCheck',
        },
        subs: [
            {
                label: 'Đăng ký ',
                href: '/pyc/registration',
                accessedRoles: ['1A'],
            },
            {
                label: 'Kiểm soát & Phê duyệt',
                href: '/pyc/approval',
                accessedRoles: ['1B'],
            },
        ]
    },
    {
        label: 'Quản lý Lộ trình',
        $icon: {
            name: 'documentCheck',
        },
        subs: [
            {
                label: 'Lộ trình Bình thường',
                href: '/route-management/normal',
                accessedRoles: ['11A'],
            },
            {
                label: 'Lộ trình Khẩn cấp',
                href: '/route-management/urgent',
                accessedRoles: ['11B'],
            },
        ]
    },
    {
        label: 'Theo dõi Lộ trình',
        $icon: {
            name: 'documentCheck',
        },
        subs: [
            {
                label: 'PTVC là xe chuyên dùng',
                href: '/route-tracking/car1',
                accessedRoles: ['24', '25', '26', '27'],
            },
            {
                label: 'PTVC KHÁC xe chuyên dùng',
                href: '/route-tracking/car2',
                accessedRoles: ['28', '29', '30'],
            },
        ]
    },
    {
        label: 'Báo cáo KPP',
        $icon: {
            name: 'documentCheck',
        },
        subs: [
            {
                label: 'BC Số lần điều quỹ NV Áp tải',
                href: '/report/orgs',
                accessedRoles: ['37'],
            },
            {
                label: 'BC Sổ theo dõi VC HĐB',
                href: '/report/special',
                accessedRoles: ['38'],
            },
        ]
    },
    {
        label: 'Danh mục',
        $icon: {
            name: 'documentCheck',
        },
        subs: [
            {
                label: 'Danh mục cụm',
                href: '/category/area',
                accessedRoles: ['57'],
            },
            {
                label: 'Danh mục ATM/CDM',
                href: '/category/atm-cdm',
                accessedRoles: ['39'],
            },
            {
                label: 'Danh mục tiền tệ',
                href: '/category/currency',
                accessedRoles: ['47'],
            },
            {
                label: 'Danh mục chức năng',
                href: '/category/function',
                accessedRoles: ['59'],
            },
            {
                label: 'Danh mục TCTD/NHNN',
                href: '/category/nhnn-tctd',
                accessedRoles: ['43'],
            },
            {
                label: 'Danh mục đơn vị',
                href: '/category/orgs',
                accessedRoles: ['41'],
            },
            {
                label: 'Danh mục nhân viên',
                href: '/category/pers',
                accessedRoles: ['49'],
            },
            {
                label: 'Danh mục mức độ ưu tiên',
                href: '/category/priority',
                accessedRoles: ['53'],
            },
            {
                label: 'Danh mục vùng',
                href: '/category/region',
                accessedRoles: ['55'],
            },
            {
                label: 'Danh mục chức danh nhân viên',
                href: '/category/title',
                accessedRoles: ['51'],
            },
            {
                label: 'Danh mục xe',
                href: '/category/vehicle',
                accessedRoles: ['45'],
            },
        ],
    },
    {
        label: 'Người dùng',
        $icon: {
            name: 'user',
        },
        subs: [
            {
                label: 'Đổi mật khẩu',
                href: '/user/change-password',
                accessedRoles: ['61'],
            },
            {
                label: 'Phân quyền',
                href: '/user/assign-role',
                accessedRoles: ['62'],
            },
            {
                label: 'Đặt lại mật khẩu',
                href: '/user/reset-password',
                accessedRoles: ['63'],
            },
            {
                label: 'Đăng ký',
                href: '/user/register',
                accessedRoles: ['63'],
            },
        ]
    },
]