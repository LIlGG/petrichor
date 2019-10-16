<script>
export default {
  name: "MenuItem",
  functional: true,
  props: {
    icon: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    span: {
      type: String,
      default: ""
    }
  },
  render(h, context) {
    const { icon, title, span } = context.props;
    let vnodes = [];
    if (icon) {
      vnodes.push(<i class={icon} aria-hidden="true" />);
    }

    if (title) {
      vnodes.push(<p>{title}</p>);
    }

    if (span) {
      let vnode = [];
      vnode.push(<span class={span}></span>);
      vnode.push(vnodes)
      vnodes = vnode;
    }

    return vnodes;
  }
};
</script>
