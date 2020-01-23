# public-badges-drawer



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description | Type      | Default   |
| ------------ | ------------- | ----------- | --------- | --------- |
| `badgeTheme` | `badge-theme` |             | `string`  | `"dark"`  |
| `modalTheme` | `modal-theme` |             | `string`  | `"light"` |
| `testMode`   | `test-mode`   |             | `boolean` | `false`   |


## Dependencies

### Depends on

- [publicbadges-circle](../public-badges-circle)
- [publicbadges-modal](../public-badges-modal)

### Graph
```mermaid
graph TD;
  publicbadges-drawer --> publicbadges-circle
  publicbadges-drawer --> publicbadges-modal
  publicbadges-modal --> publicbadges-circle
  style publicbadges-drawer fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
