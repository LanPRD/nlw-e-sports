import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: THEME.COLORS.OVERLAY
  },
  content: {
    width: 312,
    backgroundColor: THEME.COLORS.SHAPE,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8
  },
  closeIcon: {
    alignSelf: "flex-end",
    margin: 16
  },
  label: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    marginTop: 24,
    marginBottom: 8
  },
  discordButton: {
    width: 232,
    height: 48,
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    marginBottom: 32
  },
  discord: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR
  }
});
