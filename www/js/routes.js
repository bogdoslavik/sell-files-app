angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('edit', {
    url: '/edit',
    templateUrl: 'templates/edit.html',
    controller: 'editCtrl'
  })

  .state('products', {
    url: '/products',
    templateUrl: 'templates/products.html',
    controller: 'productsCtrl'
  })

  .state('purchases', {
    url: '/purchases',
    templateUrl: 'templates/purchases.html',
    controller: 'purchasesCtrl'
  })

  .state('product', {
    url: '/product',
    templateUrl: 'templates/product.html',
    controller: 'productCtrl'
  })

  .state('purchased', {
    url: '/purchased',
    templateUrl: 'templates/purchased.html',
    controller: 'purchasedCtrl'
  })

  .state('notFound', {
    url: '/notFound',
    templateUrl: 'templates/notFound.html',
    controller: 'notFoundCtrl'
  })

  .state('faq', {
    url: '/faq',
    templateUrl: 'templates/faq.html',
    controller: 'faqCtrl'
  })

  .state('examples', {
    url: '/examles',
    templateUrl: 'templates/examples.html',
    controller: 'examplesCtrl'
  })

  .state('howto', {
    url: '/howto',
    templateUrl: 'templates/howto.html',
    controller: 'howtoCtrl'
  })

  .state('terms', {
    url: '/terms',
    templateUrl: 'templates/terms.html',
    controller: 'termsCtrl'
  })

$urlRouterProvider.otherwise('/home')


});