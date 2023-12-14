import { createWebHistory, createRouter } from "vue-router";
import Home from './App.vue'
const routes =  [
    {
        path: "/",
        name: 'Home',
        component:() => import("./components/Acceuil.vue")
    },
    {
        path:"/pageLivre/:id",
        name:'pageLivre',
        component:() => import("./components/pageLivre.vue")
    },
    // {
    //     path:"/podium",
    //     name:"Podium",
    //     component: () => import("./components/podium.vue")
    // },
    // {
    //     path:"/menu-deroulant",
    //     name:"menu-deroulant",
    //     component: () => import("./components/menuDeroulant.vue")
    // },
    // {
    //     path:"/menu-desktop",
    //     name:"menu-desktop",
    //     component: () => import("./components/menuDesktop.vue")
    // },
    // {
    //     path:"/menu-mobile",
    //     name:"menu-mobile",
    //     component: () => import("./components/menuMobile.vue")
    // },
    // {
    //     path:"/info-livre",
    //     name:"info-livre",
    //     component:() => import("./components/infoLivre.vue")
    // },
    // {
    //     path:"/critique",
    //     name:"critique",
    //     component:() => import("./components/critique.vue")
    // },
    // {
    //     path:"/roueNotation",
    //     name:"roue",
    //     component:() => import("./components/roueNotation.vue")
    // },
    // {
    //     path:"/embranchement",
    //     name:"embranchement",
    //     component:()=>import("./components/embranchement.vue")
    // },
    // {
    //     path:"/critiqueType",
    //     name:"critiqueType",
    //     component:()=>import("./components/critiqueType.vue")
    // },
    ];
    
    const router = createRouter({
    history: createWebHistory(),
    routes,
    });
    
    export default router;