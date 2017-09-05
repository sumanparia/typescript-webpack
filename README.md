# Webpack using typescript

## Importaint points
1. For webpack config file better to use js file rather than ts.

## Helping points
1.  HtmlWebpackPlugin   :   Used to add js inside index.html
2.  ExtractTextPlugin   :   Used to add css inside head of index.html
3.  CleanWebpackPlugin  :   Used to delete old dist folder before build.
4.  ProvidePlugin       :   Used to provide global variable for jquery and tether(used by bootstrap 4).
5.  CopyWebpackPlugin   :   Used to copy resources from one place to another.
6.  Angular Flex Layout (https://github.com/angular/flex-layout) is slow. Better to go with pure css. Bootstrap or Bulma(bulma.io).
7.  https://getbootstrap.com/docs/4.0/getting-started/webpack/ is a good doc to add bootstrap with webpack.
8.  Adding bootstrap as global head css.


## TODO
1.  Remove bootstrap from index.ts
2.  Hot building
3.  Add angular2

