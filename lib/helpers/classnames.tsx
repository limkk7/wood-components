function classnames(...args: (string | undefined)[]) {
  return args.filter(Boolean).join(" ");
}

export default classnames;
