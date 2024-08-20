<script setup lang="ts">
import  { oaAPI,fetchFirstItem} from '@/plugins/api'
import { axiosIns as axios } from '@axios'
// import _axios from '@axios'

import defaultAvatar from '@images/avatars/avatar-1.png'

import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import avatar1 from '@images/avatars/avatar-1.png'

const userAvatar = ref(defaultAvatar)
const userPosition = ref('乐信员工')

const userID = localStorage.getItem('min') ?? '小乐'

const fetchAvatar = () => {
  // 请求头像
  axios.post(oaAPI.basicInfo, { user_min_list: [userID] })
    .then(fetchFirstItem)
    .then(( { thumb_avatar }) => {
      userAvatar.value = thumb_avatar
    })
    .catch((err) => {
      console.log(err)
    })
}

const fetchPosition = () => {

  axios.get(oaAPI.hrInfo, { params: { user_min: userID } })
    .then(fetchFirstItem)
    .then(({ manager_position_desc, professional_position_desc, job_sub_category_desc }) => {
      userPosition.value = `${job_sub_category_desc}${manager_position_desc || professional_position_desc}`
    })
    .catch((err) => {
      console.log(err)
    })}

onMounted(() => {

  if (userID) {
    fetchAvatar()
    fetchPosition()
  }

})

const userProfileList = [
  { type: 'divider' },
  // {
  //   type: 'navItem',
  //   icon: 'ri-user-line',
  //   title: 'Profile',
  //   value: 'profile',
  // },
  {
    type: 'navItem',
    icon: 'ri-settings-4-line',
    title: '设置',
    value: 'settings',
  },
  // {
  //   type: 'navItem',
  //   icon: 'ri-file-text-line',
  //   title: 'Billing Plan',
  //   value: 'billing',
  //   badgeProps: { color: 'error', content: '4' },
  // },
  { type: 'divider' },
  // {
  //   type: 'navItem',
  //   icon: 'ri-money-dollar-circle-line',
  //   title: 'Pricing',
  //   value: 'pricing',
  // },
  {
    type: 'navItem',
    icon: 'ri-question-line',
    title: '帮助',
    value: 'faq',
  },
  { type: 'divider' },

]
</script>

<template>
  <VBadge
    dot
    bordered
    location="bottom right"
    offset-x="3"
    offset-y="3"
    color="success"
  >
    <VAvatar
      class="cursor-pointer"
      size="38"
    >
      <VImg :src="userAvatar"/>

      <!-- SECTION Menu -->
      <VMenu
        activator="parent"
        width="230"
        location="bottom end"
        offset="15px"
      >
        <VList>
          <!-- 👉 User Avatar & Name -->
          <VListItem>
            <template #prepend>
              <VListItemAction start>
                <VBadge
                  dot
                  location="bottom right"
                  offset-x="3"
                  offset-y="3"
                  color="success"
                >
                  <VAvatar
                    color="primary"
                    variant="tonal"
                  >
                    <VImg :src="avatar1" />
                  </VAvatar>
                </VBadge>
              </VListItemAction>
            </template>

            <h6 class="text-sm font-weight-medium">
              {{ userID }}
            </h6>
            <VListItemSubtitle class="text-capitalize text-disabled">
              {{ userPosition }}
            </VListItemSubtitle>
          </VListItem>

          <PerfectScrollbar :options="{ wheelPropagation: false }">
            <template
              v-for="item in userProfileList"
              :key="item.title"
            >
              <VListItem
                v-if="item.type === 'navItem'"
                :value="item.value"
              >
                <template #prepend>
                  <VIcon
                    :icon="item.icon"
                    size="22"
                  />
                </template>

                <VListItemTitle>{{ item.title }}</VListItemTitle>

                <template
                  v-if="item.badgeProps"
                  #append
                >
                  <VBadge
                    inline
                    v-bind="item.badgeProps"
                  />
                </template>
              </VListItem>

              <VDivider
                v-else
                class="my-1"
              />
            </template>

            <VListItem>
              <VBtn
                block
                color="error"
                append-icon="ri-logout-box-r-line"
                to="/login"
              >
                登出
              </VBtn>
            </VListItem>
          </PerfectScrollbar>
        </VList>
      </VMenu>
      <!-- !SECTION -->
    </VAvatar>
  </VBadge>
</template>
