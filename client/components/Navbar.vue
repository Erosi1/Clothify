<template>
  <div>
    <header class="nav-opt-sprite nav-locate-us nav-lang-en nav-ssl nav-unrec">
      <div class="container-fluid desktop-nav">
        <div class="row">
          <!-- Logo -->
          <div class="col-sm-2">
  <div class="logo-area">
    <nuxt-link to="/">
      <img src="/img/bookify.png" alt="logo" class="img-fluid" width="700" height="700" />
    </nuxt-link>
  </div>
</div>
          <!-- Search Bar -->
          <div class="col-sm-6 pt-0">
            <Search />
          </div>
          <div class="col-sm-4"></div>
        </div>
        <div class="row">
          <!-- Delivery -->
          <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 pl-2">
            <div class="nav-global-location">
              <nuxt-link to="/address" class="nav-a nav-a-2">
                <div class="nav-sprite" id="nav-packard-glow-loc-icon"></div>
                <div id="glow-ingress-block">
                  <span class="nav-line-1" id="glow-ingress-line1"
                    >Deliever To</span
                  >
                  <template v-if="$auth.$state.loggedIn && $auth.$state.user.address">
  <span class="nav-line-2" id="glow-ingress-line1">
    {{ $auth.$state.user.address.city }}
  </span>
</template>



                  <template v-else>
                    <span class="nav-line-2" id="glow-ingress-line1"
                      >Address</span
                    >
                  </template>
                </div>
              </nuxt-link>
            </div>
          </div>
          <!-- Shopping -->
          <div class="col-xl-6 col-lg-5 col-md-4 col-sm-6 p-0">
            <div class="nav-fill">
              <div class="nav-shop">
                <a href="/#" class="nav-a nav-a-2 nav-single-row-link">
                  <span class="nav-line-2">
                    Browsing history
                    <span
                      class="nav-icon nav-arrow"
                      style="visibility: visible"
                    ></span>
                  </span>
                </a>
              </div>

              <div class="nav-xshop-container">
                <div class="nav-xshop">
                  <a href="#" class="nav-a">Today's deals</a>
                  <a href="#" class="nav-a">Your bookify.com</a>
                  <a href="#" class="nav-a">Gift cards</a>
                  <a href="#" class="nav-a">Registry</a>
                  <a href="#" class="nav-a">Sell</a>
                  <template v-if="$auth.$state.loggedIn">
                    <div v-if="$auth.$state.user.email === 'admineros@gmail.com'">
    <a href="#" class="nav-a" @click.prevent="redirectToDashboard()">Dashboard</a>
  </div></template>







                </div>
              </div>
            </div>
          </div>
          <!-- Accounts and order -->
          <div class="col-xl-4 col-lg-5 col-md-6 col-sm-4 p-0">
            <div class="nav-tools">
              <a
                href="#"
                id="icp-nav-flyout"
                class="nav-a nav-a-2 icp-link-style-2"
              >
                <span class="icp-nav-link-inner">
                  <span class="nav-line-1">
                    <span class="icp-nav-globe-img-2"></span>
                    <span class="icp-nav-language">EN</span>
                  </span>
                  <span class="nav-line-2">
                    &nbsp;
                    <span
                      class="nav-icon nav-arrow"
                      style="visibility: visible"
                    ></span>
                  </span>
                </span>
              </a>
              <span class="icp-nav-link-border"></span>
              <template v-if="$auth.$state.loggedIn">
                <nuxt-link
                  to="/profile"
                  class="nav-a nav-a-2"
                  id="nav-link-accountList"
                  tabindex="0"
                >
                  <span class="nav-line-1">Hello,</span>
                  <span class="nav-line-2">{{ $auth.$state.user.name }}</span>
                </nuxt-link>
              </template>
              <template v-else>
                <nuxt-link
                  to="/login"
                  class="nav-a nav-a-2"
                  id="nav-link-accountList"
                  tabindex="0"
                >
                  <span class="nav-line-1">Hello, Sign In</span>
                  <span class="nav-line-2">
                    Account &amp; Lists
                    <span
                      class="nav-icon nav-arrow"
                      style="visibility: visible"
                    ></span>
                  </span>
                </nuxt-link>
              </template>
              <nuxt-link to="/orders" class="nav-a nav-a-2 nav-single-row-link">
                <span class="nav-line-1"></span>
                <span class="nav-line-2">Orders</span>
              </nuxt-link>
              <nuxt-link to="/cart" class="nav-a nav-a-2" id="nav-cart">
                <span aria-hidden="true" class="nav-line-1"></span>
                <span aria-hidden="true" class="nav-line-2">Cart</span>
                <span class="nav-cart-icon nav-sprite"></span>
                <span
                  id="nav-cart-count"
                  aria-hidden="true"
                  class="nav-cart-count nav-cart-0"
                  >{{ getCartLength }}</span
                >
              </nuxt-link>

            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Search from "~/components/Search";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  components: {
    Search
  },
  computed: {
    ...mapGetters(["getCartLength"]),

  },
  methods:{
    async redirectToDashboard() {

            window.location.replace('http://localhost:3000');
          }

    },
  }
;
</script>
