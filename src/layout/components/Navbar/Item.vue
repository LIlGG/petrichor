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
    },
  },
  render(h, context) {
    const { icon, title, span } = context.props;
    let vnodes = [];
    if (icon) {
      vnodes.push(<i class={icon} aria-hidden="true"/>);
    }

    if (title) {
      vnodes.push(title);
    }

    if(span){
      return h( 'span' , {class: span}, vnodes);
    }

    


    return vnodes;
  }
};
</script>
