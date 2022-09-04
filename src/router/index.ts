import Home from '../views/HomeView.vue'

import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/', component: Home, children: [
            {
                path: 'note', component: () => import('../components/HanderNav.vue'), name: 'note',
                children: [
                    {
                        path: 'html', component: () => import('../components/NoteView.vue'), name: 'makedown',
                        props: true
                    }
                ]
            },
            {
                path: '/course', component: () => import('@/views/Course.vue'),
                children: [{
                    path: 'pdfview', component: () => import('@/components/ViewPdf.vue'), name: 'pdfview'
                }]
            },
            {
                path: '/liveBroadcast', component: () => import('@/views/LiveBroadcast.vue')
            }

        ]
    },


]
export
    const router = createRouter({

        history: createWebHistory(),
        routes
    })

