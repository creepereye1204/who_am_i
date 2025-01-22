# api/exceptions.py
class EmailNotVerifiedException(Exception):
    """이메일이 인증되지 않았음을 나타내는 예외 클래스."""

    pass


class NoSessionException(Exception):
    """세션이 없음을 직접적으로 나타내는 예외 클래스"""

    pass
