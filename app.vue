<template>
  <div>
   
    <Notivue v-slot="item">
      <!-- <Notification :item="item" :theme="materialTheme" /> -->
      <Notification :item="item" :theme="materialTheme">
        <NotificationProgress :item="item" />
      </Notification>
    </Notivue>

    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
