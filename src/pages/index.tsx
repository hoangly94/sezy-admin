
import { BrowserRouter as Router, Route, Link, NavLink, Switch, Redirect } from "react-router-dom";
import { AuthRoute, RoleRoute } from '@hocs';
import '../tailwind.css';
import { useCookie } from 'sezy-design/hooks';

// import { Provider, useDispatch, useSelector } from 'react-redux'
import React,{ useEffect } from "react";
import { Breadcrumb } from "sezy-design";
import breadcrumbsData from '~config/breadcrumbs';
import useNavigation from "~components/navigation";
import Inventory from "~components/inventory";
// import store from '~stores/dashboard.store';



const Index = (): React.ReactElement => {
    // const dispatch = useDispatch();
    useEffect(() => {

    }, []);
    const { cookie: accessToken } = useCookie('accessToken');
    // const userSelector = useSelector(state => state['auth'].user);
    // const isAuthenticated = userSelector.isAuthenticated || accessToken;
    return (
        // <Provider store={store}> 
            <Router >
                {/* <Notification.Element /> */}
                <Switch>
                    {/* <Route path="/login" component={Login.Element} />
                    <Route path="/register" component={Register.Element} />
                    <Route path="/change-password" component={FirstChangePassword.Element} /> */}
                    {/* <Route path="/forgot-password" component={Forgot.Element} /> */}
                    {/* <AuthRoute path="/" component={DashboardComponent(userSelector)} isAuthenticated={isAuthenticated ? true : false} /> */}
                    <AuthRoute path="/" component={DashboardComponent()} isAuthenticated={true} />
                    
                </Switch>
            </Router>
        // </Provider>
    )
}

// const DashboardComponent = (userSelector) => () => {
const DashboardComponent = () => () => {


    // if (window.screen.width < 768) {
    //     return (
    //         <Block.Element
    //             classnames={classnames(
    //                 styles['mobile'],
    //             )}
    //         >
    //             <Block.Element
    //                 classnames={classnames(
    //                     styles['mobile-header'],
    //                 )}
    //             >
    //                 <Logo.Element />
    //                 <Button.Element {...logoutProps} />
    //             </Block.Element>
    //             <Block.Element
    //                 flex={Base.Flex.BETWEEN}
    //                 style={{
    //                     marginTop: '48px',
    //                     padding: '18px',
    //                 }}

    //             >
    //                 <Button.Element
    //                     text='PTVC là xe chuyên dụng'
    //                     width={Base.Width.PER_50}
    //                     margin={Base.MarginRight.PX_5}
    //                     backgroundColor={Base.BackgroundColor.CLASSIC_BLUE}
    //                     color={Base.Color.WHITE}
    //                     borderRadius={Base.BorderRadius.PX_3}
    //                     href='/route-tracking/car1'
    //                 />
    //                 <Button.Element
    //                     text='PTVC KHÁC xe chuyên dụng'
    //                     width={Base.Width.PER_50}
    //                     margin={Base.MarginLeft.PX_5}
    //                     backgroundColor={Base.BackgroundColor.CLASSIC_BLUE}
    //                     color={Base.Color.WHITE}
    //                     borderRadius={Base.BorderRadius.PX_3}
    //                     href='/route-tracking/car2'
    //                 />
    //             </Block.Element>

    //             <Switch>
    //                 <Route exact path="/">
    //                 </Route>
    //                 <RoleRoute path="/route-tracking/car1" component={RouteTrackingCar1.Element} accessedRoles='11B' roles={userSelector.viewList} />
    //                 <RoleRoute path="/route-tracking/car2" component={RouteTrackingCar2.Element} accessedRoles='11B' roles={userSelector.viewList} />
    //             </Switch>
    //         </Block.Element>
    //     )
    // }

    const {NavigationDesktop, NavigationMobile, NavigationMobileToggle} = useNavigation();
    return (
        <>
            {/* <NotificationMessages/>
            <DashboardMenu.Element {...dashboardMenuProps} roleCodeList={userSelector.viewList} /> */}
            <header className='px-4 py-4 border-b'>
                {NavigationMobileToggle}
            </header>
            {NavigationMobile}
            <main
                className='pl-18'
            >
                <Breadcrumb mapper={breadcrumbsData} classes='pl-2 py-1 border-0 border-b border-solid border-gray-300'/>
                <Switch>
                    <Route exact path="/">
                    </Route>
                    <Route path="/inventory">
                        <Inventory/>
                    </Route>
                    {/* <RoleRoute path="/category/orgs" component={ORGS.Element} accessedRoles={['41']} roles={userSelector.viewList} /> */}
                </Switch>
            </main>
        </>
    )
}


export default Index