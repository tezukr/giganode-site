<template>
  <Card class="card-node">
    <template #content>
      <div class="d-flex justify-space-between">
        <div class="card-node__percent">
          {{ nodeData.percent }}<span class="fs-16">%</span>
        </div>
        <div>
          <div class="mb-2">
            <div class="name">{{ nodeData.name }}</div>
            <div v-if="nodeData.desc.isLink">
              <a
                :ref="nodeData.name"
                :href="nodeData.desc.content"
                target="_blank"
                rel="noopener noreferrer"
                class="desc"
              >{{ nodeData.desc.content }}</a>

              <b-btn
                variant="link"
                size="sm"
                class="fs-12 pl-1 pr-0"
                @click="copy(nodeData.name)"
              >
                <font-awesome-icon :icon="['fas', 'copy']"/>
              </b-btn>
            </div>
            <div
              v-else
              class="desc"
            >
              {{ nodeData.desc.content }}
            </div>
            <div class="card-node__status">
              <AppCircle
                small
                class="mr-2"
              />
              {{ nodeData.status }}
            </div>
          </div>
          <div
            v-if="nodeData.to"
            class="card-node__link">
            <n-link
              :to="{ name: nodeData.to }"
              class="fs-14"
            >
              Learn more
            </n-link>
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>

<script>
import Card from './Card';
import AppCircle from './AppCircle';

export default {
  name: 'CardNode',
  components: {
    Card,
    AppCircle,
  },
  props: {
    nodeData: {
      type: Object,
      default() {
        return {
          percent: 0,
          name: 'No node name',
          desc: 'No node description',
          status: 'Offline',
          to: '#'
        }
      },
    },
  },
  methods: {
    copy(ref) {
      navigator.clipboard.writeText(this.$refs[ref].innerHTML)
    }
  }
};
</script>

<style lang="scss" scoped>

  .card-node {
    transition: all 0.2s;
    position: relative;
    padding-left: 10px !important;
    padding-right: 10px !important;
    max-width: 420px !important;

    &__percent {
      font-size: $fs-28;
      margin-right: 20px;
      @include from-laptop-down {
        font-size: $fs-21;
        padding-left: 10px !important;
        padding-right: 10px !important;
      }
      @include lg-down {
        font-size: $fs-18;
        margin-right: 10px;
      }
    }

    &__status {
      color: $grey;
      display: flex;
      align-items: center;
      @include from-laptop-down {
        font-size: $fs-14;
      }
    }

    &__link {
      visibility: hidden;
      opacity: 0;
      transition: all 0.2s;
    }

    &:after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: $color-brand;
      transition: all 0.2s;
    }

    &:hover {
      box-shadow: 0 10px 50px rgba(0, 0, 0, 0.1);

      .card-node__link {
        visibility: visible;
        opacity: 1;
      }

      &:after {
        width: 100%;
      }
    }
  }

  .desc {
    font-size: $fs-14;
  }

</style>
